package app;

import app.Entities.Point;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class PointsTableBean implements Serializable {

    private List<Point> points;
    private double R;

    public double getR() {
        return R;
    }

    public PointsTableBean() {
        points = new ArrayList<>();
    }

    public void addPoint(Point point) {
        points.add(point);
    }

    public void setR(double r) {
        R = r;
    }

    public List getPoints() {

        List<Point> reversed = new ArrayList(points);
        Collections.reverse(reversed);

        return reversed;
    }
}
