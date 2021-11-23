from django.contrib import messages
from django.http import HttpResponseRedirect, JsonResponse, HttpResponse
from django.shortcuts import render, redirect, get_object_or_404

# Create your views here.
from django.views import generic
from django.utils.text import slugify
from django.contrib.auth.forms import UserCreationForm

from .models import Art

from .forms import ArtForm

# intergration
from .serializers import ArtSerializer
from django.views.decorators.csrf import csrf_exempt


# @api_view(['GET', 'POST', 'DELETE'])
@csrf_exempt
def get_data(request):
    data = Art.objects.all()
    if request.method == 'GET':
        serializer = ArtSerializer(data, many=True)
    print(serializer)
    return JsonResponse(serializer.data, safe=False)


# delete view
def get_art(request, id):
    data = Art.objects.all().filter(id=id)
    if request.method == 'GET':
        serializer = ArtSerializer(data, many=True)
    return JsonResponse(serializer.data, safe=False)

# delete view
def delete_art(request, id):
    context = {}

    # fetch the object related to passed id
    obj = get_object_or_404(Art, id=id)

    if request.method == "POST":
        # delete object
        obj.delete()
        # after deleting redirect to
        # home page
        return HttpResponseRedirect("/")
        
    return HttpResponseRedirect("/")





class ArtList(generic.ListView):
    queryset = Art.objects.all().order_by('-created_on')
    template_name = 'index.html'


class ArtDetail(generic.DetailView):
    model = Art
    template_name = 'art_detail.html'


def art_upload_view(request):
    """Process art uploaded by users"""
    if request.method == 'POST':
        form = ArtForm(request.POST, request.FILES)
        if form.is_valid():
            art = form.save(commit=False)
            # Get the current instance object to display in the template
            art.artist = request.user
            art.slug = slugify(art.name)
            art.save()

            messages.success(request, f"{art.name} has been saved")
            return redirect('home')
    else:
        form = ArtForm()
    return render(request, 'art_form.html', {'form': form})


# delete view
def art_delete_view(request, id):
    # dictionary for initial data with
    # field names as keys
    context = {}

    # fetch the object related to passed id
    obj = get_object_or_404(Art, id=id)

    if request.method == "POST":
        # delete object
        obj.delete()
        # after deleting redirect to
        # home page
        return HttpResponseRedirect("/")

    return render(request, "art_delete.html", context)


# signup
def signup(request):
    if request.POST == 'POST':
        form = UserCreationForm()
        if form.is_valid():
            form.save()
            messages.success(request, 'Account created successfully')

    else:
        form = UserCreationForm()
        context = {
            'form': form
        }
    return render(request, 'registration/signup.html', context)
