from django.db import migrations
from api.user.models import CustomUser

class Migration(migrations.Migration):
    def seed_data(apps, schema_editor):
        user = CustomUser(name='august', 
                          email='august.sinang@gmail.com',
                          is_staff=True,
                          is_superuser=True,
                          phone='09952978800',
                          gender='Male'
                          )

        user.set_password('august')
        user.save()

    dependencies = [

    ]

    operations = [
        migrations.RunPython(seed_data),
    ]