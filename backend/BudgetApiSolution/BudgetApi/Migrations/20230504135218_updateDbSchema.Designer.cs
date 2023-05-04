﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace BudgetApi.Migrations
{
    [DbContext(typeof(ApplicationDBContext))]
    [Migration("20230504135218_updateDbSchema")]
    partial class updateDbSchema
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("BudgetApi.Entities.Budget", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("CurId")
                        .HasColumnType("integer");

                    b.Property<double>("Funds")
                        .HasColumnType("double precision");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("CurId")
                        .IsUnique();

                    b.ToTable("Budgets");
                });

            modelBuilder.Entity("BudgetApi.Entities.BudgetItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("BudgetId")
                        .HasColumnType("integer");

                    b.Property<double>("Cost")
                        .HasColumnType("double precision");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("BudgetId");

                    b.ToTable("BudgetItems");
                });

            modelBuilder.Entity("BudgetApi.Entities.Currency", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Currencies");
                });

            modelBuilder.Entity("BudgetApi.Entities.Budget", b =>
                {
                    b.HasOne("BudgetApi.Entities.Currency", "Currency")
                        .WithOne("Budget")
                        .HasForeignKey("BudgetApi.Entities.Budget", "CurId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Currency");
                });

            modelBuilder.Entity("BudgetApi.Entities.BudgetItem", b =>
                {
                    b.HasOne("BudgetApi.Entities.Budget", "Budget")
                        .WithMany("BudgetItems")
                        .HasForeignKey("BudgetId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Budget");
                });

            modelBuilder.Entity("BudgetApi.Entities.Budget", b =>
                {
                    b.Navigation("BudgetItems");
                });

            modelBuilder.Entity("BudgetApi.Entities.Currency", b =>
                {
                    b.Navigation("Budget");
                });
#pragma warning restore 612, 618
        }
    }
}