<%@ page import="java.util.List" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.Collections" %>
<%@ page import="app.Entities.Point" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:useBean id="pointsBean" class="app.PointsTableBean" scope="session"/>
<%--<tr> <th>N</th> <th>X</th> <th>Y</th> <th>R</th> <th><b>Результат</b></th> </tr>--%>
<html>
<head>
    <meta charset="utf-8">

    <link rel="stylesheet" href="css/table.css">
</head>
<body>
<table border="1">
    <tr>
        <th width=53px>X</th>
        <th width=53px>Y</th>
        <th width=53px>R</th>
        <th width=200px>Попадание</th>
        <th width=111px>Текущее время</th>
        <%--<th width=227px>Время выполнения скрипта</th>--%>
    </tr>
<%
    @SuppressWarnings("unchecked")
    List<Point> list = pointsBean.getPoints();

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

    <%--<% if (list.get(0).getR() == point.getR()) { %>--%>
    <script>
            console.log("check");
            parent.drawPoint("<%=point.hit()?"green":"red"%>", <%=point.getX() %>, <%=point.getY() %>);
    </script>
    <%--<% } %>--%>
</tr>
    <%}%>
</table>
</body>
</html>
