# Generated by Django 3.0 on 2020-02-15 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('furniture', '0010_auto_20200215_1458'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='image',
            field=models.ImageField(upload_to='media'),
        ),
    ]
