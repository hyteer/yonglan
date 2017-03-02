from django.db import models

class Role(models.Model):
    role_type = models.IntegerField()
    name = models.CharField(max_length=20)
    def __unicode__(self):
        return self.name
    class Meta:
        verbose_name = "Role"
        verbose_name_plural = "Roles"
    def display_name(self):
        return self.name
    display_name.short_description = '角色'
    def __str__(self):
        return self.name
