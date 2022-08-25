select "countries"."name" as "country",
       count("cities") as "total cities"
  from "countries"
  join "cities" using ("countryId")
 group by "countryId";
