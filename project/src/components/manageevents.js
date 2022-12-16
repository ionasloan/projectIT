import React from 'react';
import './manage.css';

function ManageEvents() {
  return (
    <table>
  <tr>
    <th>Title</th>
    <th>Genre</th>
    <th>Date</th>
    <th>Image</th>
    <th>Running Time</th>
    <th>Plot</th>
    <th>EDIT</th>
    <th>DELETE</th>
  </tr>
  
  <tr>
    <td>Anchorman</td>
    <td>Action</td>
    <td>2nd March</td>
    <td>anchorman.jpg</td>
    <td>122 minutes</td>
    <td>The Legend of Ron Burgundy is a 2004 American satirical comedy film directed by Adam McKay in his directorial debut.</td>
    <td><button>EDIT</button></td>
    <td><button>DELETE</button></td>
  </tr>
  
    <tr>
    <td>John Wick</td>
    <td>Action</td>
    <td>6th March</td>
    <td>johnwick.jpg</td>
    <td>134 minutes</td>
    <td>John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski and written by Derek Kolstad.</td>
    <td><button>EDIT</button></td>
    <td><button>DELETE</button></td>
  </tr>
  
    <tr>
    <td>The Shining</td>
    <td>Horror</td>
    <td>13th March</td>
    <td>shining.jpg</td>
    <td>125 minutes</td>
    <td>The Shining is a 1980 psychological horror film produced and directed by Stanley Kubrick and co-written with novelist Diane Johnson.</td>
    <td><button>EDIT</button></td>
    <td><button>DELETE</button></td>
  </tr>
  
    <tr>
    <td>White Chicks</td>
    <td>Comedy</td>
    <td>20th March</td>
    <td>whitechicks.jpg</td>
    <td>86 minutes</td>
    <td>White Chicks is a 2004 American comedy film directed by Keenen Ivory Wayans. It stars Shawn Wayans and Marlon Wayans as two FBI agents who go undercover.</td>
    <td><button>EDIT</button></td>
    <td><button>DELETE</button></td>
  </tr>
   
    <tr>
    <td>Star Wars</td>
    <td>Scifi</td>
    <td>19th March</td>
    <td>starwars.jpg</td>
    <td>140 minutes</td>
    <td>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977.</td>
    <td><button>EDIT</button></td>
    <td><button>DELETE</button></td>
  </tr>
  
    <tr>
    <td>Annabelle</td>
    <td>Horror</td>
    <td>8th March</td>
    <td>annabelle.jpg</td>
    <td>110 minutes</td>
    <td>Annabelle is a 2014 American supernatural horror film directed by John R. Leonetti, written by Gary Dauberman and produced by Peter Safran and James Wan.</td>
    <td><button>EDIT</button></td>
    <td><button>DELETE</button></td>
  </tr>
  
  
      <tr>
    <td>Clueless</td>
    <td>Comedy</td>
    <td>17th March</td>
    <td>clueless.jpg</td>
    <td>95 minutes</td>
    <td>Clueless is a 1995 American coming-of-age teen comedy film written and directed by Amy Heckerling.</td>
    <td><button>EDIT</button></td>
    <td><button>DELETE</button></td>
  </tr>
  
    <tr>
    <td>Pulp Fiction</td>
    <td>Action</td>
    <td>16th March</td>
    <td>pulpfiction.jpg</td>
    <td>150 minutes</td>
    <td>Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.</td>
    <td><button>EDIT</button></td>
    <td><button>DELETE</button></td>
  </tr>
  
</table>
  );
}

export default ManageEvents
