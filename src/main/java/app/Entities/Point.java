package app.Entities;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;

public class Point implements Serializable {
    final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
    private double x;
    private double y;
    private double r;
    private boolean hit;
    private String currentTime;

    public Point(double x, double y, double r, int timezoneOffset) {
        this.x = x;
        this.y = y;
        this.r = r;
        hit = checkArea();
        currentTime = LocalDateTime.now(ZoneOffset.UTC).minusMinutes(timezoneOffset).format(formatter);
    }

    private boolean checkArea() {

        boolean circle = ((Math.pow(x, 2) + Math.pow(y, 2) <= (Math.pow(r / 2, 2))) && y <= 0 && x >= 0);
        boolean square = (x <= r && y <= r && y >= 0 && x >= 0);
        boolean triangle = (y >= (-2 * x - r) && y <= 0 && x <= 0 && x >= -r / 2);

        return square || triangle || circle;
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

    public boolean hit(double R) {
        boolean circle = ((Math.pow(x, 2) + Math.pow(y, 2) <= (Math.pow(R / 2, 2))) && y <= 0 && x >= 0);
        boolean square = (x <= R && y <= R && y >= 0 && x >= 0);
        boolean triangle = (y >= (-2 * x - R) && y <= 0 && x <= 0 && x >= -R / 2);

        return square || triangle || circle;
    }

    public String getCurrentTime() {
        return currentTime;
    }
}
