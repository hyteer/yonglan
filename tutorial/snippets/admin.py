from django.contrib import admin
from .models import Snippet

class SnippetAdmin(admin.ModelAdmin):
    fieldsets = [
    	(None, {'fields': ['owner']}),
        ('Title', {'fields': ['title']}),
        ('Code', {'fields': ['code']}),
    	('language', {'fields': ['language']}),
    	('created', {'fields': ['created']}),
        ('owner', {'fields': ['owner']})
    ]
    list_display = ('title', 'created', 'owner', 'code', 'language')
    list_filter = ['created','owner','language']
    search_fields = ['title']


admin.site.register(Snippet,SnippetAdmin)


# Register your models here.
