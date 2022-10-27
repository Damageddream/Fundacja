from django.contrib import admin

from .models import Todo, User, Aktualnosci

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')
class AktualnosciAdmin(admin.ModelAdmin):
    list_display = ('poster', 'title', 'title_image', 'content', 'date', 'archived')

# Register your models here.

admin.site.register(Todo, TodoAdmin)
admin.site.register(User)
admin.site.register(Aktualnosci)

