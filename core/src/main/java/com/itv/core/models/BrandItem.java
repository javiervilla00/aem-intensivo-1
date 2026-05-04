package com.itv.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class BrandItem {

  @ValueMapValue
  private String image;

  @ValueMapValue
  private String name;

  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String brandLink;

  public String getImage() {
    return image;
  }

  public String getName() {
    return name;
  }

  public String getBrandLink() {
    return brandLink;
  }

}
