FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src
COPY ["src/Resilience.Web.Host/Resilience.Web.Host.csproj", "src/Resilience.Web.Host/"]
COPY ["src/Resilience.Web.Core/Resilience.Web.Core.csproj", "src/Resilience.Web.Core/"]
COPY ["src/Resilience.Application/Resilience.Application.csproj", "src/Resilience.Application/"]
COPY ["src/Resilience.Core/Resilience.Core.csproj", "src/Resilience.Core/"]
COPY ["src/Resilience.EntityFrameworkCore/Resilience.EntityFrameworkCore.csproj", "src/Resilience.EntityFrameworkCore/"]
WORKDIR "/src/src/Resilience.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/Resilience.Web.Host", "src/Resilience.Web.Host"]
COPY ["src/Resilience.Web.Core", "src/Resilience.Web.Core"]
COPY ["src/Resilience.Application", "src/Resilience.Application"]
COPY ["src/Resilience.Core", "src/Resilience.Core"]
COPY ["src/Resilience.EntityFrameworkCore", "src/Resilience.EntityFrameworkCore"]
WORKDIR "/src/src/Resilience.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:8.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "Resilience.Web.Host.dll"]
