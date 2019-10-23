package app;

import app.Entities.Point;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class PointsTableBean implements Serializable {

//    private int n = 1;
    private List<Point> points;

    public PointsTableBean() {
        points = new ArrayList<>();
    }

//    int getN() {
//        return n;
//    }

    public void addPoint(Point point) {
//        n++;
        points.add(point);
    }

    public List getPoints() {
//        while (points.size() > 10) {
//            points.remove(0);
//        }

        List<Point> reversed = new ArrayList(points);
        Collections.reverse(reversed);

        return reversed;
    }
}
