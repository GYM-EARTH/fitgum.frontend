import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  n = <any>navigator;

  constructor() { }

  ngOnInit() {
  
    this.n.getUserMedia({ video: true, audio: true }, this.gotMedia, function () {})
 
  }

  gotMedia (stream, cameraSrc) {
    var peer = new SimplePeer({ initiator: location.hash === '#1',trickle: false, stream: stream })
    // var peer2 = new SimplePeer()
   
    peer.on('error', function (err) { console.log('error', err) })
 

    peer.on('signal', function (data) {
      // peer2.signal(data)
      console.log('SIGNAL', JSON.stringify(data))
      document.querySelector('#outgoing').textContent = JSON.stringify(data)
    })
   
    peer.on('connect', function () {
      console.log('CONNECT')
      peer.send('whatever' + Math.random())
    })
    // peer2.on('signal', function (data) {
    //   peer1.signal(data);
    //   console.log(2);
    // })
    peer.on('data', function (data) {
      console.log('data: ' + data)
      
    })

    document.querySelector('form').addEventListener('submit', function (ev) {
      ev.preventDefault()
      peer.signal(JSON.parse(document.querySelector('#incoming').value))
      // console.log(document.querySelector('#incoming').value);
    })
    peer.on('stream', function (stream) {
      // got remote video stream, now let's show it in a video tag
      var video = document.querySelector('video')
      if (typeof video.srcObject == "object") {
        video.srcObject = stream;
      } else {
        video.src = URL.createObjectURL(stream);
      }
      video.play()

    })
    
  }


}
