from django.contrib import admin
from .models import Art


# Register your models here.
class ArtAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'artist', 'created_on')
    list_filter = ("name", "artist",)
    search_fields = ["name", "artist", "description"]
    prepopulated_fields = {'slug': ('name',)}


admin.site.register(Art, ArtAdmin)
