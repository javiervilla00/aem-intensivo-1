package com.itv.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class EmployeeItem {
  @ValueMapValue
  private String name;

  @ValueMapValue
  private String role;

  @ValueMapValue
  private String image;

  public String getName() {
    return name;
  }

  public String getRole() {
    return role;
  }

  public String getImage() {
    return image;
  }
}
