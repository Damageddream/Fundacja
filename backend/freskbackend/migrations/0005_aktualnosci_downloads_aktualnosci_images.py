# Generated by Django 4.1 on 2022-11-03 09:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('freskbackend', '0004_alter_aktualnosci_title_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='aktualnosci',
            name='downloads',
            field=models.FileField(blank=True, null=True, upload_to='images/'),
        ),
        migrations.AddField(
            model_name='aktualnosci',
            name='images',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
    ]