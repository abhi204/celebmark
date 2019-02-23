from useraccount.models import User

def unique_fields():
    unique_fields = []
    for field in User._meta.get_fields():
        try:
            if field.unique:
                unique_fields.append(field.name)
        except:
            pass
    return unique_fields