USE TOUR_MANAGEMENT;
GO
CREATE OR ALTER PROCEDURE deleteUser(@ID VARCHAR(255))
AS
BEGIN
UPDATE Users SET isDeleted = 1 WHERE ID=@ID;
END