from django.contrib import admin

from .models import User, Aktualnosci


class AktualnosciAdmin(admin.ModelAdmin):
    list_display = ('poster', 'title', 'title_image', 'content', 'date', 'archived')

# Register your models here.


admin.site.register(User)
admin.site.register(Aktualnosci)

