# Generated by Django 4.1 on 2022-12-20 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('freskbackend', '0014_contactform_read'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactform',
            name='read',
            field=models.BooleanField(default=False),
        ),
    ]
