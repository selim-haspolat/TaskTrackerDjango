from django.db import models


class Todo(models.Model):

    PRIORITY = (
        (1, 'High'),
        (2, 'Medium'),
        (3, 'Low')
    )

    title = models.CharField(max_length=50)
    description = models.TextField(null=True, blank=True)
    priority = models.PositiveSmallIntegerField(
        choices=PRIORITY, default=2)
    is_done = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
