var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

printPlaylists: function (library) {

  for(var key in this.playlists){
    var playID = this.playlists[key].id;
    var playName = this.playlists[key].name;
    var playTracks = this.playlists[key].tracks.length;
    var allInfo = playID + ": " + playName + " - " + playTracks + " tracks";
    console.log(allInfo);
  }
},
 //watch out for me
//library.printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks : function () {
  for (var key in this.tracks){
    var trackID = this.tracks[key].id;
    var trackName = this.tracks[key].name;
    var artistName = this.tracks[key].artist;
    var albumInfo = this.tracks[key].album;

    var allInfo = trackID + ": " + trackName + " by " + artistName + " (" + albumInfo + ")"
    console.log(allInfo);
  }
},
 //watch out for me
//library.printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

printPlaylist : function (playlistId) {
  var trackNum = [];
  var playID = this.playlists[playlistId].id; //stores playlist ID
  var playName = this.playlists[playlistId].name; // stores playlist name
  var playTracks = this.playlists[playlistId].tracks.length; //stores tracks length
  var playName = playID + ": " + playName + " - " + playTracks + " tracks" //combines
  console.log(playName); // prints the playlist name
  var trackNum = this.playlists[playlistId]["tracks"]; //stores the tracks found in each playlist (t01, t02)

    for(var i = 0; i < trackNum.length; i++){
      var trackID = this.tracks[trackNum[i]].id; // stores track ID
      var trackName = this.tracks[trackNum[i]].name; // store strack name
      var artistName = this.tracks[trackNum[i]].artist; // stores track artists
      var albumInfo = this.tracks[trackNum[i]].album; // stores album info
      var allInfo = trackID + ": " + trackName + " by " + artistName + " (" + albumInfo + ")" //combines them all
      console.log(allInfo);
    }
},
 //watch out for me

// //library.printPlaylist("p01");

// adds an existing track to an existing playlist

addTrackToPlaylist : function (trackId, playlistId) {
  var position = this.playlists[playlistId].tracks.length
  this.playlists[playlistId].tracks[position] = trackId;
  console.log(this.playlists);
},
 // watch out for me

//library.addTrackToPlaylist("t01", "p02");

// generates a unique id
// (use this for addTrack and addPlaylist)

uid : function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},


// adds a track to the library

addTrack : function (name2, artist, album) {

  newID = this.uid()
  newName = name2;
  newArtist = artist;
  newAlbum = album;

  this.tracks[newID] = {"id" : newID, "name" : newName, "artist" : newArtist, "album" : newAlbum};

  console.log(library);

},
 //watch out for me
// //library.addTrack("U2", "Beauitful Day", "Day Album");

// // adds a playlist to the library

addPlaylist : function (name) {

  playName = name;
  newID = this.uid();
  this.playlists[newID] = {"id" : newID, "name" : name, "tracks" : []}

  console.log(library);
}
};

library.addPlaylist("summer playlist");
library.addTrack("U2", "Beauitful Day", "Day Album");
library.addTrackToPlaylist("t01", "p02");
library.printPlaylist("p01");
library.printTracks();
library.printPlaylists();

// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

//}

