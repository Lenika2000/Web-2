package app.Entities;

import sun.util.resources.LocaleData;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.TimeZone;


public class Point implements Serializable {
    private double x;
    private double y;
    private double r;
    private int timezoneOffset;
    private boolean hit;
//    private long time ;
    private String currentTime;
//
//    ZonedDateTime currentDate = ZonedDateTime.now( ZoneOffset.UTC );
    final SimpleDateFormat sdf = new SimpleDateFormat("hh:mm:ss");



//// Give it to me in GMT time.
//    sdf.setTimeZone(TimeZone.getTimeZone("GMT"));
//    System.out.println("GMT time: " + sdf.format(currentTime));

    public Point(double x, double y, double r, int timezoneOffset) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.timezoneOffset = timezoneOffset;
        hit = checkArea();
//        time = new Date().getTime(); //количество миллисекунд с 1 января 1970г
        currentTime = sdf.format(new Date());
    }


//    public void setTime(long time) {
//        this.time = time;
//    }

//функция вычиления времени клиента с учетом часового пояса

    private boolean checkArea(){

        boolean circle = ((Math.pow(x, 2) + Math.pow(y, 2) <= (Math.pow(r / 2, 2))) && y <= 0 && x >= 0);
        boolean square = (x <= r && y <= r && y >= 0 && x >= 0);
        boolean triangle = (y >= (-2*x - r) && y <= 0 && x <= 0 && x >= -r/2);

        return square || triangle || circle;
    }


    public String toJson() {
        return "{ \"x\" : " + x +
                " , \"y\" : \"" + y +
                "\" , \"r\" : \"" + r +
                "\" , \"timezoneOffset\" : \"" + timezoneOffset +
                "\" , \"hit\" : " + hit +
//                " , \"time\" : \"" + time +
                "\" , \"currentTime\" : \"" + currentTime +
                "\"}";
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public boolean hit() {
        return hit;
    }

    public String getCurrentTime() {
        return currentTime;
    }
}
