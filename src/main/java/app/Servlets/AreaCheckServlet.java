package app.Servlets;

import app.Entities.Point;
import app.PointsTableBean;
import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;



public class AreaCheckServlet extends HttpServlet {
    private PointsTableBean bean;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        bean = (PointsTableBean) req.getSession().getAttribute("pointsBean");

        String[] selectedX = req.getParameter("selectedX").split(",");
        double y = Double.parseDouble(req.getParameter("y"));
        int r = Integer.parseInt(req.getParameter("r"));
        int timezoneOffset = Integer.parseInt(req.getParameter("timezoneOffset"));

        ArrayList<Point> points = new ArrayList<>();
        Arrays.stream(selectedX).forEach((s)-> points.add(new Point(Double.parseDouble(s),y,r,timezoneOffset)));

//        PrintWriter out = resp.getWriter();
//        StringBuilder strresponse = new StringBuilder();

        points.stream().forEach((s) -> {
             bean.addPoint(s);
        });

//        points.stream().forEach((s) -> strresponse.append(s.toJson() + "&") );

        resp.setContentType("text/html; charset=UTF-8");
//        out.println(strresponse);
        req.getServletContext().getRequestDispatcher("/table.jsp").include(req, resp);

//        out.close();
    }
}
