from django.contrib.auth.views import LoginView
from django.urls import reverse_lazy

class CustomLoginView(LoginView):
    template_name = 'users/login.html'
    redirect_authenticated_user = True
    success_url = reverse_lazy('dashboard')  # cambia por tu vista principal si aplica
