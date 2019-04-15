from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin

from .models import BaseUser, Celeb

from .forms import (
    UserCreationForm, UserChangeForm,
    CelebCreationForm, CelebChangeForm
)

class BaseUserAdmin(UserAdmin):
    # The forms to add and change user instances
    form = UserChangeForm
    add_form = UserCreationForm

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ('user_name','email','mobile',)
    list_filter = ()
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Information', {'fields': ('first_name','last_name','mobile','profile_pic')}),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('user_name', 'first_name', 'last_name', 'email', 'mobile', 'dob', 'password1', 'password2')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ()

class CelebAdmin(admin.ModelAdmin):
    # The forms to add and change user instances
    form = CelebChangeForm
    add_form = CelebCreationForm

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ('user', 'category', 'rating')
    list_filter = ()
    fieldsets = (
        (None, {'fields': ('user',)}),
        ('Information', {'fields': ('category',)}),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'user', 'category', 
                'description', 'handles',
                )}
        ),
    )
    search_fields = ('user','category')
    ordering=('user',)
    filter_horizontal = ()

admin.site.register(BaseUser, BaseUserAdmin)
admin.site.unregister(Group)
admin.site.register(Celeb, CelebAdmin)