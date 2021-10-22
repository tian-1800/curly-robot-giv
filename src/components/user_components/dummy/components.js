import attachment from "../icons/attachment.svg";
import blankSpace from "../icons/blank_space.svg";
import caption from "../icons/caption.svg";
import checkboxes from "../icons/checkboxes.svg";
import colorPicker from "../icons/color_picker.svg";
import dateCalendar from "../icons/date_calendar.svg";
import dateOfBirth from "../icons/date_of_birth.svg";
import dateTime from "../icons/date_time.svg";
import dropdown from "../icons/dropdown.svg";
import geolocation from "../icons/geolocation.svg";
import hints from "../icons/hints.svg";
import imageUpload from "../icons/image_upload.svg";
import monthlyCalendar from "../icons/monthly_calendar.svg";
import numberTelephone from "../icons/number_telephone.svg";
import radioButton from "../icons/radio_button.svg";
import shortLongText from "../icons/short_long_text.svg";
import signature from "../icons/signature.svg";
import tableLayout from "../icons/table_layout.svg";
import time from "../icons/time.svg";
import title from "../icons/title.svg";
import videoUpload from "../icons/video_upload.svg";

const components = [
  {
    title: "Basic Components",
    list: [
      { name: "Short Text", icon: shortLongText, id: "short-text" },
      { name: "Long Text", icon: shortLongText, id: "long-text" },
      { name: "Number", icon: numberTelephone, id: "number" },
      { name: "Telephone Number", icon: numberTelephone, id: "telephone" },
      { name: "Image Upload", icon: imageUpload, id: "img-upload" },
      { name: "Video Upload", icon: videoUpload, id: "vid-upload" },
      { name: "Checkboxes", icon: checkboxes, id: "checkboxes" },
      { name: "Radio Buttons", icon: radioButton, id: "radio-buttons" },
      { name: "Drop-down Menus", icon: dropdown, id: "drop-down" },
    ],
  },
  {
    title: "Date and Time Components",
    list: [
      { name: "Today's Date", icon: dateCalendar, id: "today" },
      { name: "Date Calendar", icon: dateCalendar, id: "calendar" },
      { name: "Date and Time Calendar", icon: dateTime, id: "date-time" },
      { name: "Date of Birth", icon: dateOfBirth, id: "date-birth" },
      {
        name: "Monthly Calendar",
        icon: monthlyCalendar,
        id: "monthly-calendar",
      },
      { name: "Time", icon: time, id: "time" },
    ],
  },
  {
    title: "Miscellaneous Components",
    list: [
      { name: "Table Layout", icon: tableLayout, id: "table" },
      { name: "Blank Space", icon: blankSpace, id: "blank" },
      { name: "Title", icon: title, id: "title" },
      { name: "Caption", icon: caption, id: "caption" },
      { name: "Hints", icon: hints, id: "hints" },
      { name: "Geolocation", icon: geolocation, id: "geolocation" },
      { name: "Color Picker", icon: colorPicker, id: "color" },
      { name: "Attachment", icon: attachment, id: "attachment" },
      { name: "Signature", icon: signature, id: "signature" },
    ],
  },
];

export default components;
