from django.contrib import admin

from .models import Todo, User, Aktualnosci

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(Todo, TodoAdmin)
admin.site.register(User)
admin.site.register(Aktualnosci)

