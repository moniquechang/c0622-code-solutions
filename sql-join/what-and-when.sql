select "films"."releaseYear",
       "genres"."name" as "genre"
  from "genres"
  join "filmGenre" using ("genreId")
  join "films" using ("filmId")
 where "films"."title" = 'Boogie Amelie';
