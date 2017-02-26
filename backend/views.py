import webpack_manifest
from django.shortcuts import render, redirect
from django.http import HttpResponse

def test(req):
	return render(req, 'test.html')

def manitest(req):
    manifest = webpack_manifest.load(
    # An absolute path to a manifest file
    path='/frontend/dist/asset-manifest.json',
    # The root url that your static assets are served from
    static_url='/static/',
    debug=False,
    # Max timeout (in seconds) that the loader will wait while webpack is building.
    # This setting is only used when the `debug` argument is True
    timeout=60,
    # If a manifest read fails during deserialization, a second attempt will be
    # made after a small delay. By default, if `read_retry` is `None` and `debug`
    # is `True`, it well be set to `1`
    read_retry=None,
    # If you want to access the actual file content, provide the build directory root
    #static_root='/var/www/static/',
    )
    import pdb; pdb.set_trace()
    # A string containing pre-rendered script elements for the "main" entry
    print("main.js:",manifest.main.js)  # '<script src="/static/path/to/file.js"></script><script ... >'
    # A string containing pre-rendered link elements for the "main" entry
    manifest.main.css  # '<link rel="stylesheet" href="/static/path/to/file.css"><link ... >'
    # A string containing pre-rendered link elements for the "vendor" entry
    manifest.vendor.css  # '<link rel="stylesheet" href="/static/path/to/file.css"><link ... >'
    # A list containing relative urls (without the static url) to the "vender" entry
    manifest.vendor.css.rel_urls  # ['path/to/file.css', 'path/to/another.css', ...]
    # A string containing concatenated script elements for the "main" entry
    manifest.main.js.content  # '/* content of file1.js, files2.js, ...*/'
    # A string containing pre-rendered inline script elements for the "main" entry
    manifest.main.js.inline  # '<script>/* content of file1.js, files2.js, ...*/</script>'
    # A string containing pre-rendered inline style elements for the "main" entry
    manifest.main.css.inline  # '<style>/* content of file1.css, files2.css, ...*/</style>'
    # Note: If you don't name your entry, webpack will automatically name it "main".

    return render(req, 'test.html')
