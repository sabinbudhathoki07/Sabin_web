# Generated by Django 3.0 on 2020-02-15 09:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('furniture', '0009_auto_20200215_1452'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='image',
            field=models.ImageField(upload_to='furniture/static/img'),
        ),
    ]