package app.Servlets;

import app.Entities.Point;
import app.PointsTableBean;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;


public class AreaCheckServlet extends HttpServlet {
    private PointsTableBean bean;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {


        try {
            if (req.getParameter("y") != null && req.getParameterValues("x") != null) {

                bean = (PointsTableBean) req.getSession().getAttribute("pointsBean");


                String[] selectedX = req.getParameterValues("x");
                String requestY = req.getParameter("y").replace(",", ".");
                double y = Double.parseDouble(requestY);
                int r = Integer.parseInt(req.getParameter("r"));
                int timezoneOffset = Integer.parseInt(req.getParameter("timezoneOffset"));

                ArrayList<Point> points = new ArrayList<>();
                Arrays.stream(selectedX).forEach(x -> points.add(new Point(Double.parseDouble(x), y, r, timezoneOffset)));

                points.stream().forEach((point) -> {
                    bean.addPoint(point);
                });

            }
            if (bean != null)
                bean.setR(Double.parseDouble(req.getParameter("r")));
        } catch (Exception e) {

        }

        resp.setContentType("text/html; charset=UTF-8");
        req.getServletContext().getRequestDispatcher("/table.jsp").include(req, resp);

    }
}
