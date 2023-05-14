from rest_framework.viewsets import ModelViewSet
from .serializers import Todo, TodoSerializer
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .serializers import TodoSerializer
from rest_framework import status


class TodoView(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


@api_view(['GET'])
def changeIsDone(request, pk):
    task = get_object_or_404(Todo, id=pk)
    serializer = TodoSerializer(
        instance=task, data={'title': 'React', 'is_done': not task.is_done})
    if serializer.is_valid():
        serializer.save()
        return Response({
            "message": "Updated Successfully"
        }, status=status.HTTP_202_ACCEPTED)
    else:
        return Response({
            "message": serializer.error_messages,
            "data": serializer.data
        }, status=status.HTTP_400_BAD_REQUEST)
