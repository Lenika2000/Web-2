<%@ page import="java.util.List" %>
<%@ page import="app.Entities.Point" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:useBean id="pointsBean" class="app.PointsTableBean" scope="session"/>

<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/table_style.css">
</head>
<body>


<%
    List<Point> list = pointsBean.getPoints();
    if (list.size() != 0) { %>
<table>
    <tr>
        <th width=53px>X</th>
        <th width=53px>Y</th>
        <th width=53px>R</th>
        <th width=200px>Попадание</th>
        <th width=111px>Текущее время</th>
    </tr>
        <%
        }

        for (Point point : list) {
    %>
    <tr>
        <td>
            <div class="tdScroll"><%=point.getX() %>
            </div>
        </td>
        <td>
            <div class="tdScroll"><%=point.getY() %>
            </div>
        </td>
        <td><%=point.getR()%>
        </td>
        <td><%=point.hit() ? "Точка попадает в заданную область" : "Точка не попадает в заданную область" %>
        </td>
        <td><%=point.getCurrentTime()%>
        </td>


        <script>
            parent.drawPoint("<%=point.hit(pointsBean.getR())?"green":"red"%>", <%=point.getX() %>, <%=point.getY() %>);
        </script>

    </tr>
        <%}%>
    <%  if (list.size() != 0) { %>
    </table>
            <%}%>

</body>
</html>
