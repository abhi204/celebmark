from .models import Payment
from django.contrib import admin

# Register your models here.
class PaymentAdmin(admin.ModelAdmin):
    list_display = (
        'user',
        'payment_id',
        'payment_request_id',
        'purpose',
        'status',
        'amount',
        'fees'
        )
    list_filter = (
        'purpose',
        'status',
        'amount',
        )
    fieldsets = (
        (None, {'fields': ('purpose',)}),
        ('Details', {'fields': ('amount','status','invite','user')}),
    )
    search_fields = ('user','payment_id','payment_request_id')
    ordering=()
    filter_horizontal = ()

admin.site.register(Payment, PaymentAdmin)