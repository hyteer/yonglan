from django.conf.urls import url
from snippets import views



urlpatterns = [
    url(r'^snippets/$', views.JSONResponse.snippet_list),
    url(r'^snippets/(?P<pk>[0-9]+)/$', views.JSONResponse.snippet_detail),
]
