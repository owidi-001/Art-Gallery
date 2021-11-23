from . import views
from django.urls import path
from django.contrib.auth import views as auth_views

urlpatterns = [
    # Basic template views
    path('', views.ArtList.as_view(), name='home'),
    path('art/<slug:slug>/', views.ArtDetail.as_view(), name='art_detail'),
    path("create", views.art_upload_view, name='create'),
    path('<id>/delete', views.art_delete_view, name='delete'),

    # API ROUTES
    # /api/a: GET, POST, DELETE
    # /api/:slug: GET, PUT, DELETE
    path('api/', views.get_data, name='api_art_list'),

    # Auth views
    path('signup', views.signup, name='signup'),
    path('login', auth_views.LoginView.as_view(template_name='registration/login.html'), name='login'),
    path('logout', auth_views.LogoutView.as_view(), name='logout_view'),

]
