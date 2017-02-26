# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf.urls import url
from django.contrib.auth import views as auth_views
from django.views import generic
from . import views


app_name = 'erp'  # set this app's namespace

urlpatterns = [
    url(r'^$',generic.TemplateView.as_view(template_name='erp/index.html')),
    #url(r'^$', views.index, name='home'),
    url(r'^login/$', generic.TemplateView.as_view(template_name='erp/pages/login.html')),
]
