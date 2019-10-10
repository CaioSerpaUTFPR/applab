import { CalendarComponent } from "ionic2-calendar/calendar";
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-usoequip",
  templateUrl: "./usoequip.page.html",
  styleUrls: ["./usoequip.page.scss"]
})
export class UsoequipPage implements OnInit {
  equip: any;

  event = {
    startTime: "",
    endTime: ""
  };

  minDate = new Date().toISOString();

  eventSource = [];
  viewTitle;

  calendar = {
    mode: "month",
    currentDate: new Date()
  };

  @ViewChild(CalendarComponent, { static: false }) myCal: CalendarComponent;
  teste: true;

  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  ngOnInit() {
    this.resetEvent();
  }

  resetEvent() {
    this.event = {
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString()
    };
  }

  // Create the right event format and reload source
  addEvent() {
    let eventCopy = {
      startTime: new Date(this.event.startTime),
      endTime: new Date(this.event.endTime)
    };
    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }
  // Change current month/week/day
  next() {
    var swiper = document.querySelector(".swiper-container")["swiper"];
    swiper.slideNext();
  }

  back() {
    var swiper = document.querySelector(".swiper-container")["swiper"];
    swiper.slidePrev();
  }

  // Change between month/week/day
  changeMode(mode) {
    this.calendar.mode = mode;
  }

  // Focus today
  today() {
    this.calendar.currentDate = new Date();
  }

  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    let start = formatDate(event.startTime, "medium", this.locale);
    let end = formatDate(event.endTime, "medium", this.locale);

    const alert = await this.alertCtrl.create({
      message:
        "Reserva feita por USuario<br> De: " + start + "<br><br>Até: " + end,
      buttons: ["OK"]
    });
    alert.present();
  }

  // Time slot was clicked
  onTimeSelected(ev) {
    let selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = selected.toISOString();
  }
}
