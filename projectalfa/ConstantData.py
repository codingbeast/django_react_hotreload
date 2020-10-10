def GetHost(request):
    hostname = "http://{}".format(request.get_host())
    return hostname