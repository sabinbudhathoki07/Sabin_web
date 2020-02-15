from django.contrib import messages
from django.shortcuts import redirect
from furniture.models import User
from django.db.models import Q


class Authenticate:

    def valid_user(function):
        def wrap(request, id):
            try:
                User.objects.get(Q(Email_id=request.session['Email_id']),Q(password=request.session['password']))
                return function(request, id)

            except:
                messages.warning(request, "Please Enter valid email or password.")
                return redirect("/login")

        return wrap
