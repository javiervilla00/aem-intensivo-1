package com.itv.core.models;

import java.util.Collections;
import java.util.List;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Accordion3DModel {
   @ChildResource(name = "employees")
  private List<EmployeeItem> employees;

  public List<EmployeeItem> getEmployees() {
    if (employees != null) {
      return employees;
    }
    return Collections.emptyList();
  }
  public boolean hasEmployees() {
    return employees != null && !employees.isEmpty();
  }
}
