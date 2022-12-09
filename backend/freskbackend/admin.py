from django.contrib import admin

from .models import User, Aktualnosci, Photos, DownloadFile, ContactForm


class AktualnosciAdmin(admin.ModelAdmin):
    list_display = ('poster', 'title', 'title_image', 'content', 'date', 'archived', 'images', 'downloads')

# Register your models here.


admin.site.register(User)
admin.site.register(Aktualnosci)
admin.site.register(Photos)
admin.site.register(DownloadFile)
admin.site.register(ContactForm)


