from django.shortcuts import render, redirect
from django.http import HttpResponse

def test(req):
	return render(req, 'test.html')
