from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin

from .models import BaseUser, Celeb, User

from .forms import (
    BaseUserCreationForm, BaseUserChangeForm,
    CelebCreationForm, CelebChangeForm,
    UserCreationForm, UserChangeForm,
)

class BaseUserAdmin(UserAdmin):
    # The forms to add and change user instances
    form = BaseUserChangeForm
    add_form = BaseUserCreationForm

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ('user_name','first_name','last_name','email','mobile','bookmarks',)
    list_filter = ()
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Information', {'fields': ('first_name','last_name','mobile','profile_pic',)}),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'user_name', 'first_name', 
                'last_name', 'email',
                'mobile', 'dob',
                'password1', 'password2',
                )}
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
    list_display = ('base_user', 'category','city', 'rating',)
    list_filter = ()
    fieldsets = (
        (None, {'fields': ('base_user',)}),
        ('Information', {'fields': ('category','city','description')}),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'base_user', 'category',
                'description','city',
                )}
        ),
    )
    search_fields = ('base_user','category')
    ordering=('base_user',)
    filter_horizontal = ()

class UserAdmin(admin.ModelAdmin):
    # The forms to add and change user instances
    form = UserChangeForm
    add_form = UserCreationForm

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ('base_user', 'free_invites',)
    list_filter = ()
    fieldsets = (
        (None, {'fields': ('base_user',)}),
        ('Information', {'fields': ('free_invites',)}),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'base_user', 'free_invites',
                )}
        ),
    )
    search_fields = ('base_user','free_invites')
    ordering=('base_user',)
    filter_horizontal = ()


admin.site.register(BaseUser, BaseUserAdmin)
admin.site.register(Celeb, CelebAdmin)
admin.site.register(User, UserAdmin)
admin.site.unregister(Group)
