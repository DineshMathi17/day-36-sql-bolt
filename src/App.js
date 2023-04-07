import img1 from './image/img1.png'
import img2 from './image/img2.png'
import img3 from './image/img3.png'
import img4 from './image/img4.png'
import img5 from './image/img5.png'
import img6 from './image/img6.png'
import img7 from './image/img7.png'
import img8 from './image/img8.png'
import img9 from './image/img9.png'
import img10 from './image/img10.png'
import img11 from './image/img11.png'
import img12 from './image/img12.png'
import img13 from './image/img13.png'
import img14 from './image/img14.png'
import img15 from './image/img15.png'
import img16 from './image/img16.png'
import img17 from './image/img17.png'
import img18 from './image/img18.png'
import './App.css';



function App() {
  return (
    <div className="App">
      <h1 className='sql'> SQL Bolt </h1>
      <hr></hr>
      <div>
        <h1>Exercise 1</h1>
        <img src={img1} alt="Exercise 1" width="500" height="300" />
        <p>1. SELECT title FROM movies;</p>
        <p>2. SELECT director FROM movies;</p>
        <p>3. SELECT title, director FROM movies;</p>
        <p>4. SELECT title, year FROM movies;</p>
        <p>5. SELECT * FROM movies;</p>
      </div>
      <hr></hr>
      <div>
        <h1>Exercise 2</h1>
        <img src={img2} alt="Exercise 2" width="500" height="300" />
        <p>1. SELECT * FROM movies where id=6;</p>
        <p>2. SELECT * FROM movies where year between 2000 and 2010</p>
        <p>3. SELECT * FROM movies where year not  between 2000 and 2010</p>
        <p>4. SELECT * FROM movies where year between 1995 and 2003</p>
      </div>
      <hr></hr>
      <div>
        <h1>Exercise 3</h1>
        <img src={img3} alt="Exercise 3" width="500" height="300" />
        <p>1. SELECT title FROM movies where title LIKE "toy%"</p>
        <p>2. SELECT * FROM movies where Director LIKE "john%"</p>
        <p>3. SELECT * FROM movies where Director not LIKE "john%"</p>
        <p>4. SELECT title FROM movies where title LIKE "wall%"</p>
      </div>
      <hr></hr>
      <div>
        <h1>Exercise 4</h1>
        <img src={img4} alt="Exercise 4" width="500" height="300" />
        <p>1. SELECT DISTINCT director FROM movies  ORDER BY director</p>
        <p>2. SELECT title, year FROM movies  ORDER BY year DESC limit 4;</p>
        <p>3. SELECT  title FROM movies  ORDER BY TITLE ASC limit 5;</p>
        <p>4. SELECT  title FROM movies  ORDER BY TITLE ASC limit 5 OFFSET 5;</p>
      </div>
      <hr></hr>
      <div>
        <h1>Exercise 5</h1>
        <img src={img5} alt="Exercise 5" width="500" height="300" />
        <p>1. SELECT city, population FROM north_american_cities where country like "CANADA"</p>
        <p>2. SELECT city FROM north_american_cities where country like "united states" ORDER BY latitude DESC;</p>
        <p>3. SELECT CITY, Longitude FROM north_american_cities WHERE Longitude less than -87.629798  ORDER BY Longitude;</p>
        <p>4. SELECT CITY FROM north_american_citiesWHERE COUNTRY LIKE "MEXICO" ORDER BY POPULATION DESC LIMIT 2;</p>
        <p>5. SELECT CITY,POPULATION FROM north_american_cities
          WHERE COUNTRY LIKE "UNITED STATES" ORDER BY POPULATION DESC
          LIMIT 2 OFFSET 2; </p>
      </div>
      <hr></hr>
      <div>
        <h1>Exercise 6</h1>
        <img src={img6} alt="Exercise 6" width="500" height="300" />
        <p> 1. SELECT title , domestic_sales, International_sales FROM movies INNER JOIN boxoffice on id =boxoffice.movie_id;</p>
        <p>2. SELECT title , domestic_sales, International_sales FROM movies INNER JOIN boxoffice on id =boxoffice.movie_id  WHERE International_sales greater than Domestic_sales;</p>
        <p>3. SELECT title ,rating FROM movies INNER JOIN boxoffice on id =boxoffice.movie_id
          order by rating desc;</p>
      </div>
      <hr></hr>
      <div>
        <h1>Exercise 7</h1>
        <img src={img7} alt="Exercise 7" width="500" height="300" />
        <p>1. SELECT Distinct Building FROM employees;</p>
        <p>2. SELECT * FROM Buildings;</p>
        <p>3. SELECT Distinct Building_name,role FROM Buildings left join Employees on Buildings.Building_name = Employees.Building  ;</p>
      </div>
      <hr></hr>
      <div>
        <h1>Exercise 8</h1>
        <img src={img8} alt="Exercise 8" width="500" height="300" />
        <p>1. SELECT name, role FROM employees where building is null;</p>
        <p>2. SELECT * FROM Buildings left join employees
          on Buildings.building_name = employees.building
          where name is null</p>
      </div>
      <hr></hr>
      <div>
        <h1>Exercise 9</h1>
        <img src={img9} alt="Exercise 9" width="500" height="300" />
        <p>1. SELECT title, (Domestic_sales + International_sales)/1000000  As combined_sales FROM moviesinner join Boxoffice  on movies.id=Boxoffice.Movie_id ;</p>
        <p>2. SELECT title,(rating*10) As ratings_percent FROM movies inner join Boxoffice
          on movies.id=Boxoffice.Movie_id ;</p>
        <p>3. SELECT title,year FROM moviesinner join Boxoffice
          on movies.id=Boxoffice.Movie_id where year %2=0;</p>
      </div>
      <hr></hr>
      <div>
        <h1>Exercise 10</h1>
        <img src={img10} alt="Exercise 10" width="500" height="300" />
        <p>1. SELECT MAX(Years_employed) FROM employees;</p>
        <p>2. SELECT role, AVG(Years_employed) FROM employees group by role;</p>
        <p>3. SELECT building, sum(Years_employed) FROM employees group by building;</p>
      </div>
      <hr></hr>
      <div>
        <h1>Exercise 11</h1>
        <img src={img11} alt="Exercise 11" width="500" height="300" />
        <p>1. SELECT count(role)As number_of_artists FROM employees where role = "Artist";</p>
        <p>2. SELECT role, count(role)As number_of_Engineer FROM employees group by role;</p>
        <p>3. SELECT role, sum(Years_employed)As number_of_Engineer FROM employees
          group by role Having role = "Engineer"</p>
      </div>
      <hr></hr>
      <div>
        <h1>Exercise 12</h1>
        <img src={img12} alt="Exercise 12" width="500" height="300" />
        <p>1. SELECT Director, count(*) as Director_movie_count  FROM  movies  group by Director;</p>
        <p>2. SELECT  director, sum(Domestic_sales + International_sales) FROM movies
          inner join Boxoffice
          on Movies.id = Boxoffice.Movie_id  group by director ;</p>
      </div>
      <hr></hr>
      <div>
        <h1>Exercise 13</h1>
        <img src={img13} alt="Exercise 13" width="500" height="300" />
        <p>1. INSERT INTO MOVIES  (Title,Director,Year,Length_minutes)
          VALUES("Toy Story 4","John Lasseter",2019, 100);
        </p>
        <p>2. INSERT INTO Boxoffice  (Movie_id,Rating,Domestic_sales,International_sales)
          VALUES(15, 8.5, 340000000, 270000000);
        </p>

      </div>
      <hr></hr>
      <div>
        <h1>Exercise 14</h1>
        <img src={img14} alt="Exercise 14" width="500" height="300" />
        <p>1. UPDATE Movies
          SET Director = "John Lasseter"
          WHERE Title = "A Bug's Life"
        </p>
        <p>2. UPDATE Movies
          SET Year = "1999"
          WHERE Title = "Toy Story 2"</p>
        <p>3. UPDATE Movies
          SET Title="Toy Story 3",Director="Lee Unkrich"
          WHERE ID=11</p>
      </div>
      <hr></hr>
      <div>
        <h1>Exercise 15</h1>
        <img src={img15} alt="Exercise 15" width="500" height="300" />
        <p>1. DELETE FROM Movies
          WHERE YEAR less than 2005;
        </p>
        <p>2. DELETE FROM Movies
          WHERE Director="Andrew Stanton"
        </p>

      </div>
      <hr></hr>
      <div>
        <h1>Exercise 16</h1>
        <img src={img16} alt="Exercise 16" width="500" height="300" />
        <p>1.CREATE TABLE Database(
          name text,
          version float,
          download_count integer
          );
        </p>
      </div>
      <hr></hr>
      <div>
        <h1>Exercise 17</h1>
        <img src={img17} alt="Exercise 17" width="500" height="300" />
        <p>1. ALTER TABLE Movies
          ADD Aspect_ratio DataType FLOAT
          DEFAULT default_value;
        </p>
        <p>2. ALTER TABLE Movies
          ADD Language  DataType TEXT
          DEFAULT English;
        </p>
      </div>
      <hr></hr>
      <div>
        <h1>Exercise 18</h1>
        <img src={img18} alt="Exercise 18" width="500" height="300" />
        <p>1. DROP TABLE IF EXISTS Movies ;</p>
        <p>2. DROP TABLE IF EXISTS BoxOffice;</p>

      </div>
      <hr></hr>



    </div>
  );
}

export default App;
