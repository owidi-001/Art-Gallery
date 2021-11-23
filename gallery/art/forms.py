from django import forms
from .models import Art


class ArtForm(forms.ModelForm):
    """Form for the image model"""

    class Meta:
        model = Art
        fields = ('name', 'image', 'description')
