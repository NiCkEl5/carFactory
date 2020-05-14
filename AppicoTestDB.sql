USE [master]
GO
/****** Object:  Database [appico_test]    Script Date: 4/22/2020 9:44:06 PM ******/
CREATE DATABASE [appico_test]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'appico_test', FILENAME = N'C:\databases\appico_test.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'appico_test_log', FILENAME = N'C:\databases\appico_test_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [appico_test] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [appico_test].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [appico_test] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [appico_test] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [appico_test] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [appico_test] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [appico_test] SET ARITHABORT OFF 
GO
ALTER DATABASE [appico_test] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [appico_test] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [appico_test] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [appico_test] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [appico_test] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [appico_test] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [appico_test] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [appico_test] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [appico_test] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [appico_test] SET  DISABLE_BROKER 
GO
ALTER DATABASE [appico_test] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [appico_test] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [appico_test] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [appico_test] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [appico_test] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [appico_test] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [appico_test] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [appico_test] SET RECOVERY FULL 
GO
ALTER DATABASE [appico_test] SET  MULTI_USER 
GO
ALTER DATABASE [appico_test] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [appico_test] SET DB_CHAINING OFF 
GO
ALTER DATABASE [appico_test] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [appico_test] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [appico_test] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'appico_test', N'ON'
GO
ALTER DATABASE [appico_test] SET QUERY_STORE = OFF
GO
USE [appico_test]
GO
/****** Object:  Table [dbo].[contact]    Script Date: 4/22/2020 9:44:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[contact](
	[guid] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](max) NOT NULL,
	[email] [nvarchar](max) NOT NULL,
	[created] [datetime] NOT NULL,
	[dealer] [int] NOT NULL,
	[model] [int] NOT NULL,
	[message] [text] NOT NULL,
 CONSTRAINT [PK_contact] PRIMARY KEY CLUSTERED 
(
	[guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[dealer]    Script Date: 4/22/2020 9:44:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[dealer](
	[guid] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](max) NOT NULL,
	[address] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_dealer] PRIMARY KEY CLUSTERED 
(
	[guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[inventory]    Script Date: 4/22/2020 9:44:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[inventory](
	[guid] [int] IDENTITY(1,1) NOT NULL,
	[dealer] [int] NOT NULL,
	[model] [int] NOT NULL,
	[vin] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_inventory] PRIMARY KEY CLUSTERED 
(
	[guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[carmodels]    Script Date: 4/22/2020 9:44:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[carmodels](
	[guid] [int] IDENTITY(1,1) NOT NULL,
	[make] [nvarchar](max) NOT NULL,
	[model] [nvarchar](max) NOT NULL,
	[type] [nvarchar](max) NOT NULL,
	[year] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_models] PRIMARY KEY CLUSTERED 
(
	[guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[dealer] ON 
GO
INSERT [dbo].[dealer] ([guid], [name], [address]) VALUES (1, N'Ferrari Hamburg', N'Rathausstrasse 5, 20095 Hamburg')
GO
INSERT [dbo].[dealer] ([guid], [name], [address]) VALUES (2, N'Lamborghini Hamburg', N'Elbchausee 1, 22587 Hamburg')
GO
INSERT [dbo].[dealer] ([guid], [name], [address]) VALUES (3, N'Mercedes Berlin', N'Kurfürstendamm 1, 10585 Berlin')
GO
SET IDENTITY_INSERT [dbo].[dealer] OFF
GO
SET IDENTITY_INSERT [dbo].[inventory] ON 
GO
INSERT [dbo].[inventory] ([guid], [dealer], [model], [vin]) VALUES (1, 1, 1, N'123')
GO
INSERT [dbo].[inventory] ([guid], [dealer], [model], [vin]) VALUES (2, 1, 3, N'321')
GO
INSERT [dbo].[inventory] ([guid], [dealer], [model], [vin]) VALUES (3, 1, 4, N'3211')
GO
INSERT [dbo].[inventory] ([guid], [dealer], [model], [vin]) VALUES (4, 2, 5, N'321321')
GO
INSERT [dbo].[inventory] ([guid], [dealer], [model], [vin]) VALUES (5, 2, 7, N'13232')
GO
INSERT [dbo].[inventory] ([guid], [dealer], [model], [vin]) VALUES (6, 3, 9, N'4321')
GO
INSERT [dbo].[inventory] ([guid], [dealer], [model], [vin]) VALUES (7, 3, 150, N'09321')
GO
INSERT [dbo].[inventory] ([guid], [dealer], [model], [vin]) VALUES (8, 3, 10, N'73290')
GO
SET IDENTITY_INSERT [dbo].[inventory] OFF
GO
SET IDENTITY_INSERT [dbo].[models] ON 
GO
INSERT [dbo].[carmodels] ([guid], [make], [model], [type], [year]) VALUES (1, N'Ferrari', N'458', N'Italia', N'2010')
GO
INSERT [dbo].[carmodels] ([guid], [make], [model], [type], [year]) VALUES (2, N'Ferrari', N'488', N'Spider', N'2015')
GO
INSERT [dbo].[carmodels] ([guid], [make], [model], [type], [year]) VALUES (3, N'Ferrari', N'488', N'Pista', N'2018')
GO
INSERT [dbo].[carmodels] ([guid], [make], [model], [type], [year]) VALUES (4, N'Ferrari', N'488', N'Spider', N'2015')
GO
INSERT [dbo].[carmodels] ([guid], [make], [model], [type], [year]) VALUES (5, N'Lamborghini', N'Urus', N'', N'2018')
GO
INSERT [dbo].[carmodels] ([guid], [make], [model], [type], [year]) VALUES (6, N'Lamborghini', N'Huracán', N'LP 640-4 Performante', N'2017')
GO
INSERT [dbo].[carmodels] ([guid], [make], [model], [type], [year]) VALUES (7, N'Lamborghini', N'Huracán', N'LP 640-4 Performante Spyder', N'2018')
GO
INSERT [dbo].[carmodels] ([guid], [make], [model], [type], [year]) VALUES (8, N'Mercedes-AMG', N'GT', N'', N'2015')
GO
INSERT [dbo].[carmodels] ([guid], [make], [model], [type], [year]) VALUES (9, N'Mercedes-AMG', N'GT', N'R', N'2017')
GO
INSERT [dbo].[carmodels] ([guid], [make], [model], [type], [year]) VALUES (10, N'Mercedes', N'S-Class', N'63 AMG', N'2018')
GO
SET IDENTITY_INSERT [dbo].[carmodels] OFF
GO
ALTER TABLE [dbo].[inventory]  WITH CHECK ADD  CONSTRAINT [FK_inventory_dealer] FOREIGN KEY([dealer])
REFERENCES [dbo].[dealer] ([guid])
GO
ALTER TABLE [dbo].[inventory] CHECK CONSTRAINT [FK_inventory_dealer]
GO
ALTER TABLE [dbo].[inventory]  WITH CHECK ADD  CONSTRAINT [FK_inventory_carmodels] FOREIGN KEY([model])
REFERENCES [dbo].[carmodels] ([guid])
GO
ALTER TABLE [dbo].[inventory] CHECK CONSTRAINT [FK_inventory_models]
GO
USE [master]
GO
ALTER DATABASE [appico_test] SET  READ_WRITE 
GO
