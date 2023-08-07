// Import
const connect = require("../db");

// Playlist model
class Playlist {
    constructor(db) {
        this.db = db;
        this.songs = this.db.collection('songs');
    }

    // Method to add a song to the playlist
    async addSong(title, artists, url) {
        const song = await this.songs.findOne({ title });

        if (song) {
            await this.songs.updateOne({ title }, { $inc: { playCount: 1 } });
        } else {
            await this.songs.insertOne({ title, artists, url, playCount: 1 });
        }
    }

    async playSong(title) {
        const song = await this.songs.findOne({ title });

        if (song) {
            await this.songs.updateOne({ title }, { $inc: { playCount: 1 } });
            return song.url;
        } else {
            return null;
        }
    }

    async getListOfSongs() {
        return this.songs.find().toArray();
    }

    async getMostPlayed() {
        return this.songs.find().sort({ playCount: -1 }).toArray();
    }
}

module.exports = Playlist;
