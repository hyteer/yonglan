from django.shortcuts import render,HttpResponseRedirect, get_object_or_404, \
render_to_response
from django.http import HttpResponse

# Create your views here.

def index(req):
    #import pdb; pdb.set_trace()
    return render(req, 'erp/index.html')

def test(req):
    return HttpResponse('Erp test...')
