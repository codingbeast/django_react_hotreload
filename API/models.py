from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

from django.conf import settings 
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
class MyAccontManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError("Users must have a email address")
        if not username:
            raise ValueError("users must have a username")
        user = self.model(
            email = self.normalize_email(email),
            username = username,
        )
        user.set_password(password)
        user.save(user=self._db)
        return user
    def create_superuser(self, email, username, password):
        user = self.model(
            email = self.normalize_email(email),
            username = username,
        )
        user.set_password(password)
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using = self._db)
        return user

class Account(AbstractBaseUser):
    email = models.EmailField(verbose_name="email", max_length=60, unique=True)
    username = models.CharField(max_length=30, unique=True)
    date_joined = models.DateTimeField(verbose_name="date joined" , auto_now_add=True)
    is_customer = models.BooleanField('customer status', default=True)
    coin = models.IntegerField('total coin', default=0)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = MyAccontManager()

    def __str__(self):
        return self.email
    def has_perm(self, perm, obj=None):
        return self.is_admin
    def has_module_perms(self, app_label):
        return True
    
@receiver(post_save, sender= settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance= None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class Product(models.Model):
    img = models.ImageField(upload_to="uploads/img/")
    title = models.CharField(verbose_name="title" , max_length=150, default=None)
    description = models.CharField(verbose_name="description", max_length=500, default=None)
class veriation(models.Model):
    product_model = models.ForeignKey(Product, related_name='veriation', on_delete=models.CASCADE)
    passcode = models.CharField(verbose_name="passcode1" , max_length=50)
    price = models.IntegerField(verbose_name="price3")
    expire_status = models.BooleanField(verbose_name="expire_status", default=True)
class Holder(models.Model):
    product = models.ForeignKey(veriation, on_delete=models.CASCADE, related_name="holder_product")
    user = models.ForeignKey(Account,on_delete=models.CASCADE, related_name="holder_account")
class Pricesetup(models.Model):
    name = models.CharField(verbose_name="name", max_length=30)
    price = models.IntegerField(verbose_name="price")