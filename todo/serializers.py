from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Todo
        # field = '__all__'
        exclude = ['created_date', 'updated_date']
